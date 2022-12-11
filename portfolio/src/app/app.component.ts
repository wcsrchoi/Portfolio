import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, addDoc, Timestamp, setDoc, doc } from '@angular/fire/firestore';
import { query, orderBy, collection } from '@firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';


// interface variable that's in database
export interface FirestoreRec {
  name: string,
  subtitle: string,
  image: string;
  content: string,
  link: string,
  id: number,
  summary: string
}

export interface Summary {
  summary: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio';
  name: string = "";
  subtitle: string = "";
  content: string = "";
  image: string = "";
  public items: Observable<FirestoreRec[]>;
  public summary: Observable<FirestoreRec[]>;

  constructor(public firestore: Firestore) {

    // Using Web Version 9
    // get queries from the database ordered by time and loading the payload of data into itmes
    const plist = query(collection(firestore, "portfolio"), orderBy("id"));
    this.items = collectionData(plist) as Observable<FirestoreRec[]>;

    const summary = query(collection(firestore, "summary"), orderBy("summary"));
    this.summary = collectionData(summary) as Observable<FirestoreRec[]>;



    // getting username and color from the local storage
    // const userNameLS = localStorage.getItem("userName");
    // this.userName = userNameLS != null ? userNameLS : "";
    // const colorLS = localStorage.getItem("color");
    // this.color = colorLS != null ? colorLS : "";
  }



  // write the below fields into the database
  // WriteDB() {
  //   addDoc(collection(this.firestore, 'cs336-chat'), {
  //     userName: this.userName,
  //     message: this.message,
  //     timestamp: new Date(),
  //     color: this.color
  //   })
  //   this.message = " "; // empty the message text box after wrting to the database
  // }

  // // writing username into the local storage
  // writeUserNameLS() {
  //   localStorage.setItem('userName', this.userName,);
  // }

  // // writing color into the local storage
  // writeColorLS() {
  //   localStorage.setItem('color', this.color);
  // }

}