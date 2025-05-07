import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  standalone: true,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  club = signal('Afaaq');
  adversaire = computed(() => this.club() == 'Afaaq' ? 'Anaruz' : 'Afaaq');

  changeClub() {
    this.club.update(oldValue => oldValue == 'Afaaq' ? 'Anaruz' : 'Afaaq');
  }

  a = signal(0);
  b = signal(0);
  sum = computed(() => this.a() + this.b());

  incA() {
    this.a.update(oldValue => oldValue + 1);
  }

  incB() {
    this.b.update(oldValue => oldValue + 1);
  }
}
