import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule, CommonModule),
    provideRouter([
      { path: '', component: NotesComponent }
    ])
  ]
};
