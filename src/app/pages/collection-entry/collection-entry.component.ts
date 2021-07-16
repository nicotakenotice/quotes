import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collection } from 'src/app/store/data';
import { Entry } from 'src/app/store/model';

@Component({
  selector: 'app-collection-entry',
  templateUrl: './collection-entry.component.html',
  styleUrls: ['./collection-entry.component.scss']
})
export class CollectionEntryComponent implements OnInit {
  selectedEntry?: Entry = undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.selectedEntry = collection.find(entry => entry.slug === this.route.snapshot.paramMap.get('slug'));
  }
}
