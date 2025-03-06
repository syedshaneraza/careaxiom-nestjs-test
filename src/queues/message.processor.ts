import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('message-queue')
export class MessageProcessor {
  @Process('send-welcome-message')
  async handleWelcomeMessage(job: Job<{ email: string; name: string }>) {
    console.log(`Sending welcome message to ${job?.data?.email}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(`Welcome message sent to ${job?.data?.name}`);
  }
}
