import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  users;
  userEditForm: FormGroup;
  userForm: FormGroup;
  selectedRow = 0;
  showCreateFlag = false;
  showEditFlag = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
    )
  {

  }

    createForm() {
      this.userForm = this.fb.group({
        name: '',
        surname: '',
        age: '',
        description: '',
        group: '',
        note: '',
      });
    }

  createEditForm() {
    this.userEditForm = this.fb.group({
      editName: '',
      editSurname: '',
      editAge: '',
      editDescription: '',
      editGroup: '',
      editNote: '',
    });
  }
  clearForm() {
    this.userEditForm = this.fb.group({
      editName: '',
      editSurname: '',
      editAge: '',
      editDescription: '',
      editGroup: '',
      editNote: '',
    });
  }
  showCreate() {
    this.showCreateFlag = !this.showCreateFlag;
  }
  showEdit() {
    this.showEditFlag = !this.showEditFlag;
  }


  addUser() {
    this.users.push(this.userForm.value);
    this.showCreateFlag = false;
  }
  deleteUser() {
    if (this.selectedRow !== undefined) {
      this.users.splice(this.selectedRow, 1);
    }
    this.selectedRow = undefined;
  }
  editUser() {
    if (this.userEditForm.value.editName !== '') {
      this.users[this.selectedRow].name = this.userEditForm.value.editName;
    }
    if (this.userEditForm.value.editSurname !== '') {
      this.users[this.selectedRow].surname = this.userEditForm.value.editSurname;
    }
    if (this.userEditForm.value.editAge !== '') {
      this.users[this.selectedRow].age = this.userEditForm.value.editAge;
    }
    if (this.userEditForm.value.editGroup !== '') {
      this.users[this.selectedRow].group = this.userEditForm.value.editGroup;
    }
    if (this.userEditForm.value.editDescription !== '') {
      this.users[this.selectedRow].desciption = this.userEditForm.value.editDescription;
    }
    if (this.userEditForm.value.editNote !== '') {
      this.users[this.selectedRow].note = this.userEditForm.value.editNote;
    }
    this.clearForm();
    this.showEditFlag = false;
  }
  setClickedRow(index) {
    this.selectedRow = index;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
    this.createForm();
    this.createEditForm();
  }

}
