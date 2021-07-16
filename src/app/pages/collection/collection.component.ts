import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/store/model';
import { collection } from 'src/app/store/data';

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
