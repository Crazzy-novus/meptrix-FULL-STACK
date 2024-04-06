import { Injectable } from '@angular/core';
import { VertexAI } from '@google-cloud/vertexai';

@Injectable({
  providedIn: 'root'
})



export class VertexaiService {

  vertex_ai = new VertexAI({project: 'essential-plate-404015', location: 'us-central1'});
  model = 'gemini-1.0-pro-001';


  generativeModel = this.vertex_ai.preview.getGenerativeModel({
  model: this.model,
  generation_config: {
    "max_output_tokens": 1024,
    "temperature": 0.9,
    "top_p": 1,
  },
});

 chat = this.generativeModel.startChat();

  async sendMessage(message: string ) {
    try {
      console.log('sending message: ' + message);
      const streamResult = await this.chat.sendMessageStream(message);
      console.log('stream result: ' + JSON.stringify((await streamResult.response).candidates[0].content));
      return (await streamResult.response).candidates[0].content;
    } catch (error) {
      console.error('Error: ' + error);
      return error;


    }
  }

  async generateContent(prompt: string) {
    const response = await this.sendMessage(prompt);
    console.log(response);
  }

// Initialize Vertex with your Cloud project and location


}






