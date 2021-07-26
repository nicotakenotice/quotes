import { Component, OnInit } from '@angular/core';
import { collection, Entry } from 'src/app/store';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection: Entry[] = collection;

  constructor() { }

  ngOnInit(): void { }
}
