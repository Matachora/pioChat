import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  userName: string = 'Nombre del Usuario';
  description: string = 'Descripción del usuario';
  profileImage: string = 'https://via.placeholder.com/150'; // URL de imagen por defecto

  onNameChange(newName: string) {
    this.userName = newName;
  }

  onDescriptionChange(newDescription: string) {
    this.description = newDescription;
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
