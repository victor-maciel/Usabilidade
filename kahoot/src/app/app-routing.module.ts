import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { RankingComponent } from './ranking/ranking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PainelGestorComponent } from './painel-gestor/painel-gestor.component';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'painel-gestor', component: PainelGestorComponent },
  {path: 'ranking', component: RankingComponent},
  {path: 'criar-curso', component: CriarCursoComponent},
  {path: 'painel-aluno', component: PainelAlunoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
