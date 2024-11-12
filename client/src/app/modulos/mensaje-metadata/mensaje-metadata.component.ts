import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-metadata',
  templateUrl: './mensaje-metadata.component.html',
  styleUrls: ['./mensaje-metadata.component.css']
})
export class ChatMessageComponent {
  @Input() nombre!: string;
  @Input() mensaje!: string;
  @Input() fechaHora!: Date;
}