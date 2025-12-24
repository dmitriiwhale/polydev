import chalk from 'chalk'; 
import inquirer from 'inquirer'
import {Arms} from '../components/arms'; 



const printBanner = () => { 
    console.clear()
    console.log(chalk.magenta.underline(`
                                                                                                                        
    _/_/_/      _/_/    _/    _/      _/  _/      _/    _/_/      _/_/_/  _/    _/  _/_/_/  _/      _/  _/_/_/_/   
   _/    _/  _/    _/  _/      _/  _/    _/_/  _/_/  _/    _/  _/        _/    _/    _/    _/_/    _/  _/          
  _/_/_/    _/    _/  _/        _/      _/  _/  _/  _/_/_/_/  _/        _/_/_/_/    _/    _/  _/  _/  _/_/_/       
 _/        _/    _/  _/        _/      _/      _/  _/    _/  _/        _/    _/    _/    _/    _/_/  _/            
_/          _/_/    _/_/_/_/  _/      _/      _/  _/    _/    _/_/_/  _/    _/  _/_/_/  _/      _/  _/_/_/_/       
                                                                                                                                                                                                                                   
        
        `))
    console.log('Algo and Copy trade machine');
}

const printContacts = () => { 
    console.log(chalk.magenta.underline('Twitter: https://x.com/seelffff'))
    console.log(chalk.magenta.underline('GitHub: https://github.com/seelffff'))
    console.log(chalk.magenta.underline('Sub pls ^_^'));
}

async function startCLI (): Promise<void> { 

}