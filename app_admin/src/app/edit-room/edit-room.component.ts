import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { RoomDataService } from '../services/room-data.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css'
})
export class EditRoomComponent implements OnInit {
  editForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomDataService
  ) {}

  ngOnInit(): void {
    // Retrieve stashed roomCode
    let roomCode = localStorage.getItem("roomCode");
    if (!roomCode) {
      alert("Something wrong, couldn't find where I stashed roomCode!");
      this.router.navigate(['']);
      return;
    }

    // Initialize the form
    this.editForm = this.formBuilder.group({
      code: [roomCode, Validators.required],
      name: ['', Validators.required],
      perDay: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Load the room data
    this.roomService.getRoom(roomCode)
      .subscribe(rooms => {
        if (rooms && rooms.length > 0) {
          const room = rooms[0];
          this.editForm.patchValue(room);
        } else {
          alert("Room not found!");
          this.router.navigate(['']);
        }
      });
  }

  onSubmit() {
    // Functionality to be implemented later
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  // public method to handle cancel navigation
  public onCancel(): void {
    this.router.navigate(['rooms']);
  }
}
