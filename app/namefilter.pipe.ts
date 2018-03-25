import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
    name: 'namefilterpipe'

})
export class NamePipe implements PipeTransform {
    transform(studentList: any, searchText: any) {
        if(searchText)
                return studentList.filter(x=>x.Name.toLowerCase().startsWith(searchText));
          
                return studentList;

    }

}