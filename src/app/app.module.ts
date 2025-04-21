import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // Declare your components here
    bootstrap: [AppComponent], // The root component that Angular creates and inserts into the index.html host web page
    imports: [BrowserModule, FormsModule, TasksModule], // Import other modules here if needed
})

export class AppModule {}