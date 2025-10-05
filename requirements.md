## Background: About Oak (oakmeeting.ai)

Our product allows users to upload meeting recordings, and our AI platform automatically generates accurate transcripts, speaker labels, and concise, easy-to-read meeting summaries. This helps teams save time, stay aligned, and ensure key decisions and action items are never missed.

## New Feature: "Detailed Meeting Notes"

While our AI-generated meeting summaries are great for a quick overview, users sometimes need to dive deeper into a specific topic without scrubbing through the entire transcript.
We are introducing a new feature called "Detailed Meeting Notes." This will allow users to expand a summary's bullet point to get a more comprehensive explanation, complete with additional context derived from the meeting transcript.
Here is an example of the desired user experience:
**Feature Requirement**: For each bullet point in the AI-generated summary, the user should be able to click an icon or button (e.g., "Get more details"). This action will trigger a call to our backend to get a more detailed paragraph explaining that specific point, which will then be displayed nested under the original bullet point.

## Your Assignment

This assignment is broken down into four tasks that cover the lifecycle of building this new feature.

### Task 1: System Architecture Diagram

Create a high-level architecture diagram that illustrates how you would use different AWS
resources to deploy a fully functional demo for the above feature.

- Cloud Provider: Assume we are using AWS.
- Considerations: Your diagram should show the key cloud resources needed (e.g., Lambda, API Gateway, S3, DynamoDB, etc.) and how data would flow between the front-end and back-end services.
- Deliverable: A single diagram (e.g., a PNG, JPG, or PDF). You can use any tool you like (e.g., Lucidchart, draw.io). Be prepared to explain your choices, particularly regarding scalability and cost.

### Task 2: LLM Prompting Strategy

The core of this feature is generating a detailed note from the concise note and the full meeting transcript.

- Task:
  - Solution Design: Describe your solution and framework for your LLM to generate the detailed note.
  - Prompt Design: Illustrate the prompt template you will be using for the solution.
  - Model Selection: First, choose a specific Large Language Model (LLM) for this task (pertaining to LLMs available on AWS). Justify your choice based on factors like cost, performance, and context window size.

- Deliverable:
  - A brief explanation of your chosen LLM and the rationale behind your choice.
  - The prompt (or series of prompts) you would use. Explain the key elements of your prompt and why you believe it would produce the desired output. You should assume the LLM has access to the following information:
    1. The full meeting transcript.
    1. The concise bullet point the user wants to expand.

### Task 3: Infrastructure as Code (Terraform)

Based on your architecture from Task 1, write a simple Terraform script.

- **Task**: Write a Terraform script to provision one of the key serverless components from your diagram. A good choice would be the AWS Lambda function responsible for calling the LLM and its associated IAM role.
- **Deliverable**: A single .tf file containing the Terraform configuration. You do not need to deploy it, but the code should be complete and runnable.

### Task 4: Front-End Prototype (React)

- **Task**: Create a React application from scratch that displays a list of mock meeting notes. Each note should have a button or icon that, when clicked, simulates fetching data and displays the detailed note beneath it.

- **Requirements**:
  - The component should manage its own state (e.g., which notes are expanded).
  - Clicking the "Get more details" button should reveal the detailed text. Clicking it again can hide it.
  - Use mock data for the meeting notes.
  - Focus on clean, readable code and a good user experience. The styling should be clean and modern.

- **Deliverable**: The completed React code. You will present this by running it on your local
  machine during the interview.

## Evaluation Criteria & Presentation

You will be asked to present your work in a 30-minute session. We will be looking for:

- Functionality: Does your React prototype work as described?
- Technical Design: The clarity and rationale behind your architecture, LLM prompt, and Terraform script.
- Code Quality: Is your code clean, well-organized, and easy to understand?
- Communication: How clearly can you explain your technical decisions and thought process?
