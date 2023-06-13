import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = new Array<Student>(
      { id: 1, group: 1, event: 'Издание буклетов, плакатов о вреде наркотиков, курения, алкоголя, курительных смесей.', deadlines: 'В течение года', responsible: 'Сурконт Р.Ч.' },
      { id: 2, group: 1, event: 'Участие в районных мероприятиях, акциях', deadlines: 'В течение года', responsible: 'Тарасов Т. М.' },
      { id: 3, group: 1, event: 'Организационное заседание волонтерского отряда «Голос сердца». Разработка плана мероприятий на учебный год', deadlines: '03.09.2023', responsible: 'Новикова Е. Д.' },
      { id: 4, group: 1, event: 'Акции «Память», «Обелиск» (уход за памятниками   и обелисками)', deadlines: 'В течение года', responsible: 'Коновалов Ф. Л.' },
      { id: 5, group: 2, event: 'Акция «Ветеран живет рядом» (оказание помощи ветеранам ВОВ)', deadlines: 'В течение года', responsible: 'Моисеева М. Е.'},
      { id: 6, group: 2, event: 'Акции «Чистый школьный двор», «Очистим город от мусора»', deadlines: 'Ежемесячно', responsible: 'Тарасов Т. М.' },
      { id: 7, group: 2, event: 'Челлендж «Вместе- мы едины!» в рамках «Недели Единства»', deadlines: '12.09-17.09', responsible: 'Моисеева М. Е.' },
      { id: 8, group: 3, event: 'Акция "В школу с добрым сердцем!", «Соберем первокласснику портфель вместе!» (совместно с БОКК)', deadlines: '01.09-03.09', responsible: 'Фомин Е. И.' },
      { id: 9, group: 3, event: 'Акция «Жизнь прекрасна – не трать ее напрасно» (выпуск и распространение информационных листков)', deadlines: '05.09-10.09', responsible: 'Моисеева М. Е.' },
    );

    return { students };
  }



  constructor() { }
}
