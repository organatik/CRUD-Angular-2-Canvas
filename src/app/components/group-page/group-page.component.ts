import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { GroupService } from '../../services/group.service';
import { FormGroup, FormBuilder} from '@angular/forms';
import { GroupModule } from '../../models/group/group.module';


@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit, OnChanges {
  groups;
  groupForm: FormGroup;
  groupFormEdit: FormGroup;
  selectedRow = 0;
  createdGroup = {} as GroupModule ;
  listCreateUser: Array<{name: string, surname: string}> = [];
  listEditUser: Array<{name: string, surname: string}> = [];
  showCreateFlag = false;
  showEditFlag = false;
  constructor(
    private groupService: GroupService ,
    private fb: FormBuilder
  ) { }

  createForm() {
    this.groupForm = this.fb.group({
      groupName: '',
      name: '',
      surname: ''
    });
  }
  createEditForm() {
    this.groupFormEdit = this.fb.group({
      groupNameEdit: '',
      editName: '',
      editSurname: ''
    });
  }
  showCreate() {
    this.showCreateFlag = !this.showCreateFlag;
  }
  showEdit() {
    this.showEditFlag = !this.showEditFlag;
  }
  setClickedRow(index) {
    this.selectedRow = index;
  }

  addUser() {
    if ( this.groupForm.value.name !== '' && this.groupForm.value.surname !== '' ) {
      this.listCreateUser.push( {
        name: this.groupForm.value.name,
        surname: this.groupForm.value.surname
      });
      this.clearFormUsers();
    } else {
      alert('Enter please name and surname of User');
    }
  }

  creteGroup() {
    if (this.groupForm.value.groupName !== '') {
      console.log(this.createdGroup);
      this.createdGroup.name = this.groupForm.value.groupName;
      this.createdGroup.members = [];
      this.createdGroup.members = this.createdGroup.members.concat(this.listCreateUser);
      console.log(this.createdGroup);
      this.groups.push(this.createdGroup);
      this.clearFormFull();
      this.listCreateUser = [];
      this.showCreateFlag = false;
    }
  }
  deleteGroup() {
    if (this.selectedRow !== undefined) {
      this.groups.splice(this.selectedRow, 1);
    }
    this.selectedRow = undefined;
  }
  editListUser() {
    if (this.groupFormEdit.value.editName && this.groupFormEdit.value.editSurname) {
      this.listEditUser.push({
        name: this.groupFormEdit.value.editName,
        surname: this.groupFormEdit.value.editSurname
      });
      this.groupFormEdit = this.fb.group({
        groupNameEdit: this.groupFormEdit.value.groupNameEdit,
        editName: '',
        editSurname: ''
      });
    }
  }
  editGroupName() {
    if (this.groupFormEdit.value.groupNameEdit !== '') {
      this.groups[this.selectedRow].name = this.groupFormEdit.value.groupNameEdit;
      this.groups[this.selectedRow].members = this.groups[this.selectedRow].members.concat(this.listEditUser);
      this.showEditFlag = false;
    } else {
      alert('Enter group name!');
    }
  }
  clearFormFull() {
    this.groupForm = this.fb.group({
      groupName: '',
      name: '',
      surname: ''
    });
  }
  clearFormUsers() {
    this.groupForm = this.fb.group({
      groupName: this.groupForm.value.groupName,
      name: '',
      surname: ''
    });
  }
  ngOnChanges() {

  }
  ngOnInit() {
    this.groupService.getGroups().subscribe(
      data => {
        this.groups = data;
        console.log(this.groups.members);
      }
    );
    this.createForm();
    this.createEditForm();
  }


}
