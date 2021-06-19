
export class Photo{

   id: number;
   cityId: number; // which city this photo belongs to
   url: string; // URL
   dateAdded: Date;
   description: string;
   isMain: boolean; // if this photo is the main photo
}
