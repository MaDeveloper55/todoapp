import { TestBed } from '@angular/core/testing';
import { TodoSignalStore } from './todo.signal-store';

describe('TodoSignalStore', () => {
  let service: TodoSignalStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSignalStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
