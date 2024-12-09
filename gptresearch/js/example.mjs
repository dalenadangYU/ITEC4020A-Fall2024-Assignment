// const OpenAI = require("openai");
const openaikey = 'sk-OqemR8KRPQPzuw2V28Mo-MUivgwbmm_j9Qt4oF787ST3BlbkFJeS8H9aLvWGoKCtQDXgDAoZe8Kk1Aafl5Zz9TgQdtAA';


import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: openaikey });

async function main() {
  const stream = await openai.beta.chat.completions.stream({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });

  stream.on('content', (delta, snapshot) => {
    process.stdout.write(delta);
  });

  // or, equivalently:
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }

  const chatCompletion = await stream.finalChatCompletion();
  console.log(chatCompletion); // {id: "…", choices: […], …}
}

main();