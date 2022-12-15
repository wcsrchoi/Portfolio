import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { query, orderBy, collection } from '@firebase/firestore';


// interface variables that's in database
// This interface is used for Porject List.
export interface FirestoreRec {
  name: string,
  subtitle: string,
  image: string;
  content: string,
  link: string,
  id: number,
  summary: string
}

// This interface is used for Summary/Intoduction.
export interface Summary {
  summary: string
}

// This interface is used for Profile Image.
export interface profileImage {
  image: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio';
  items: Observable<FirestoreRec[]>;
  summary: Observable<Summary[]>;
  profileImage: Observable<profileImage[]>;


  constructor(public firestore: Firestore) {

    // Using Web Version 9
    // get queries of project-lists from the database ordered by id and loading the payload of data into itmes.
    const plist = query(collection(firestore, "portfolio"), orderBy("id"));
    this.items = collectionData(plist) as Observable<FirestoreRec[]>;

    // get queries of summary from the database and loading the payload of data into summary.
    const summary = query(collection(firestore, "summary"));
    this.summary = collectionData(summary) as Observable<Summary[]>;

    // get queries of profile image from the database and loading the payload of data into profileImage.
    const pImage = query(collection(firestore, "profileImage"));
    this.profileImage = collectionData(pImage) as Observable<profileImage[]>;
  }
}