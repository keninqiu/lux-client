import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotContentComponent } from './chatbot/content/content.component';
import { UserCenterComponent } from './menu/user-center/user-center.component';
import { SalaryResearchComponent } from './menu/salary-research/salary-research.component';
import { LeftComponent } from './menu/left/left.component';
@NgModule({
  declarations: [
    FooterComponent, 
    MenuComponent,
    ChatbotComponent,
    ChatbotContentComponent,
    UserCenterComponent,
    SalaryResearchComponent,
    LeftComponent
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
