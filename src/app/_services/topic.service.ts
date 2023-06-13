import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Topic } from '../_models/topic';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TopicService {
    private serviceUrl = 'https://dummyjson.com/users';

    constructor(private http: HttpClient) { }

    getTopics(): Observable<Topic[]> {
        return this.http
            .get(this.serviceUrl)
            .pipe<Topic[]>(map((data: any) => data.Topics));
    }

    updateTopic(Topic: Topic): Observable<Topic> {
        return this.http.patch<Topic>(`${this.serviceUrl}/${Topic.id}`, Topic);
    }

    addTopic(Topic: Topic): Observable<Topic> {
        return this.http.post<Topic>(`${this.serviceUrl}/add`, Topic);
    }

    deleteTopic(id: number): Observable<Topic> {
        return this.http.delete<Topic>(`${this.serviceUrl}/${id}`);
    }

    deleteTopics(Topics: Topic[]): Observable<Topic[]> {
        return forkJoin(
            Topics.map((Topic) =>
                this.http.delete<Topic>(`${this.serviceUrl}/${Topic.id}`)
            )
        );
    }
}