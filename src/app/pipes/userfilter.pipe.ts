import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../shared/user.model';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {
  transform(value: any, filtername: any): any {
    if(filtername == ''){
      return null;
    }
    else{
      // filter each user by name
      return value;
    }
  }
}
