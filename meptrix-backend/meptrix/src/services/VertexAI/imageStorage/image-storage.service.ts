import { Injectable, inject } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {
  storage = inject(Storage);

  async onFileSelected(file: any, club_name: string, eventname: string, type: string = 'event')  {
    if (file) {
      try {
        const filePath = type + '/' + club_name + '/' + new Date().getTime() + '_' + eventname;
        const storageRef = ref(this.storage, filePath);
        const uploadTask = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(uploadTask.ref);
        return downloadURL;
      } catch (error) {
        console.log('Error uploading file:', error);
      }
    } else {
      console.log('No file selected');
      return false;
    }
    return false;
  }
}
