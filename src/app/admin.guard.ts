import {Injectable} from '@angular/core';
import{Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AdminGuard implements  CanActivate{
    constructor (private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(JSON.parse(localStorage.getItem('currentUser')).user.role == 'ADMIN'){
          console.log('err')
            return true;
        }
        this.router.navigate(['/login']);

        return false;

    }
    }
