import { VertexAI } from '@google-cloud/vertexai';
import { FormsModule } from '@angular/forms';
import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-chatbot',
    standalone: true,
    templateUrl: './chatbot.component.html',
    styleUrl: './chatbot.component.css',
    imports: [CommonModule, FormsModule]
})


export class ChatbotComponent {




  // Define the chatMessages and inputField properties
  showChatbot: boolean = false;
  chatbotResponse: { text: string; sender: 'user' | 'bot' }[] = [];
  chatMessages: { text: string; sender: 'user' | 'bot' }[] = [];
  // Create a array of integer sr=tring
  chatQuestions: string[] = ["What is your name?", "How can I contact support?"];
  inputField: string = '';
  userInput: string = ''; // Property to bind to the input field



  toggleChatbot(): void {
    this.showChatbot = !this.showChatbot;
  }

  sendMessage(message: string): void {
    this.chatMessages = [];
    const chatMessage = { messages: [] };
    // Add the selected question to the chat messages
    this.chatMessages.push({ text: message, sender: 'user' });

    // Get the chatbot's response based on the selected question
    const chatbotResponse = this.getChatbotResponse(message);

    // Add the chatbot's response to the chat messages
    this.chatMessages.push({ text: chatbotResponse, sender: 'bot' });

    // Clear the input field
    this.resetInputField();
  }

  // Function to reset the input field after sending a message
  resetInputField(): void {
    this.inputField = '';
  }

  // Function to get the chatbot's response based on the selected question
  getChatbotResponse(question: string): string {
    // Implement logic to generate a response based on the selected question
    // For simplicity, let's return the response instead of displaying it here
    if (question === 'What is your name?') {
      return 'My name is Chatbot.';
    } else if (question === 'How can I contact support?') {
      return 'You can contact support via email at support@example.com.';
    } else {
      return 'Sorry I can\'t Process this Mesage Now, I am still learning.\n Please Choose from My suggested Questions';
    }

    // Add more conditions for other questions

    // Return a default response if the question doesn't match any known patterns
    return 'I\'m sorry, I don\'t understand that question.';
  }


}
