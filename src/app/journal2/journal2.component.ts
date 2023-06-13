import { Component, OnInit} from '@angular/core';
import { StudentService } from '../_services/student.service';
import { Role, Student } from '../_models';
import { User } from '../_models';
import { AuthenticationService, UserService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-journal2',
  templateUrl: './journal2.component.html',
  styleUrls: ['./journal2.component.scss']
})
export class Journal2Component implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public students: Array<Student> = [];

  loading = false;
  user: User;
  userFromApi!: User;

  clicks = 0;
  ruCollator = new Intl.Collator('ru-RU');

  clicked1(event: any) {
    this.clicks--;
    if (this.clicks == -1) {
      this.clicks = 0;
    }
    this.studentsService.getStudents().subscribe(s => this.students = s.filter(u => u.group == this.userFromApi.groups[this.clicks]).sort((a, b) => this.ruCollator.compare(a.event, b.event)));
}
  clicked2(event: any) {
    this.clicks++;
    if (!this.userFromApi.groups.includes(this.userFromApi.groups[this.clicks])) {
      this.clicks = 0;
    }
    this.studentsService.getStudents().subscribe(s => this.students = s.filter(u => u.group == this.userFromApi.groups[this.clicks]).sort((a, b) => this.ruCollator.compare(a.event, b.event)));
  }

  add(event: string, group: any, deadlines: string, responsible: string) {
    event = event.trim();
    group = group.trim();
    deadlines = deadlines.trim();
    responsible = responsible.trim();
    if (!event && !group && !responsible && !deadlines) { return; }
    this.studentsService.addStudent({ event, group, responsible, deadlines } as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    this.studentsService.deleteStudent(student.id).subscribe();
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  constructor(private studentsService: StudentService, private userService: UserService, private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.userValue;
  }


  ngOnInit(): void {
    this.getStudents();
    this.loading = true;
    this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });

  }

  getStudents(): void {
    this.studentsService.getStudents().subscribe(s => this.students = s.filter(u => u.group == this.user.groups[this.clicks]).sort((a, b) => this.ruCollator.compare(a.event, b.event)));
  }

}
