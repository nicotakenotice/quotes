import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collection, Entry } from 'src/app/store';

@Component({
  selector: 'app-collection-entry',
  templateUrl: './collection-entry.component.html',
  styleUrls: ['./collection-entry.component.scss']
})
export class CollectionEntryComponent implements OnInit {
  entry?: Entry = undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.entry = collection.find(entry => entry.slug === this.route.snapshot.paramMap.get('entrySlug'));
    console.log(Object.keys(this.entry || {}));
  }
}
