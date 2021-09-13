import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotContentComponent } from './chatbot/content/content.component';
@NgModule({
  declarations: [
    FooterComponent, 
    MenuComponent,
    ChatbotComponent,
    ChatbotContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent, 
    MenuComponent,
    ChatbotComponent
  ]
})
export class LayoutModule { }
