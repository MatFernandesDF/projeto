import Head from 'next/head';
import { Inter } from 'next/font/google';
import React from 'react';
import Input from '../components/ui/Input';
import { Button } from '../components/ui/Button';

import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Adicione links para seus estilos e scripts, se necessário */}
      </Head>
      <main>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Bem vindo de volta</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5">
                <div className="login-wrap p-4 p-md-5">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user-o"></span>
                  </div>
                  <h3 className="text-center mb-4">Por favor digite os dados de login</h3>
                  <form action="#" className="login-form">
                    <Input type="text" placeholder="Usuario" required={true} />
                    <Input type="password" placeholder="Senha" required={true} />
                    <div className="form-group d-flex justify-content-between align-items-center">
                      <div className="w-50">
                        <Link href={'/cadastre-se'}>
                          Cadastre-se
                        </Link>
                      </div>
                      <div className="w-50 text-md-right">
                      <Link href={'/lembrete'}>
                        Esqueci minha senha
                        </Link>
                      </div>
                      
                    </div>
                    <div className="form-group d-flex justify-content-center align-items-center">
                      <Button loading={false} onClick={() => {}}>
                        LOGAR
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}