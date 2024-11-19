document.getElementById("queryButton").addEventListener("click", async () => {
    const query = document.getElementById("queryInput").value;
    const response = await fetch("http://localhost:5000/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: query })
    });
    const result = await response.json();
    document.getElementById("output").textContent = result.answer;
});


// import { HfInference } from "@huggingface/inference";


// const client = new HfInference("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");

// document.getElementById("queryButton").addEventListener("click", async () => {
//     const query = document.getElementById("queryInput").value;
//     let out = "";

//     const stream = client.chatCompletionStream({
//         model: "meta-llama/Llama-3.2-3B-Instruct",
//         messages: [
//             {
//                 role: "user",
//                 content: query
//             }
//         ],
//         max_tokens: 500
//     });

//     for await (const chunk of stream) {
//         if (chunk.choices && chunk.choices.length > 0) {
//             const newContent = chunk.choices[0].delta.content;
//             out += newContent;
//             console.log(newContent);
//         }
//     }

//     document.getElementById("output").textContent = out;
// });


// const stream = client.chatCompletionStream({
// 	model: "meta-llama/Llama-3.2-3B-Instruct",
// 	messages: [
// 		{
// 			role: "user",
// 			content: "What is the capital of France?"
// 		}
// 	],
// 	max_tokens: 500
// });

// for await (const chunk of stream) {
// 	if (chunk.choices && chunk.choices.length > 0) {
// 		const newContent = chunk.choices[0].delta.content;
// 		out += newContent;
// 		console.log(newContent);
// 	}  
// }


// document.getElementById("queryButton").addEventListener("click", async () => {
//     const query = document.getElementById("queryInput").value;
//     const response = await fetch("http://localhost:5000/query", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ query: query })
//     });
//     const result = await response.json();
//     document.getElementById("output").textContent = result.answer;
// });