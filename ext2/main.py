from flask import Flask, request, jsonify
from flask_cors import CORS

from huggingface_hub import InferenceClient
# from langchain.chains import RetrievalQA
# from langchain.vectorstores import Chroma
# from langchain.embeddings.openai import OpenAIEmbeddings
# from langchain.llms import OpenAI

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests from the Chrome extension

client = InferenceClient(api_key="")

# Initialize vector database and RAG pipeline
# embeddings = OpenAIEmbeddings(openai_api_key="YOUR_OPENAI_API_KEY")
# vectorstore = Chroma(persist_directory="./db", embedding_function=embeddings)
# qa_pipeline = RetrievalQA.from_chain_type(
#     llm=OpenAI(model="gpt-4", api_key="YOUR_OPENAI_API_KEY"),
#     retriever=vectorstore.as_retriever()
# )

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    # Save file and process for embedding (PDF processing example)
    file.save(f"./uploads/{file.filename}")
    # Add file to vectorstore (document chunking & embedding logic here)
    # Example: vectorstore.add_documents(chunked_documents)
    return jsonify({"message": "File uploaded and processed successfully."})

@app.route('/query', methods=['POST'])
def query():
	data = request.json
	user_query = data.get("query", "")
	messages = [
			{
			"role": "user",
			"content": user_query
		}
		]
	stream = client.chat.completions.create(
		model="meta-llama/Llama-3.2-3B-Instruct", 
		messages=messages, 
		max_tokens=500,
		stream=True
	)
	response = ""
	for chunk in stream:
		response += chunk.choices[0].delta.content
	return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)










