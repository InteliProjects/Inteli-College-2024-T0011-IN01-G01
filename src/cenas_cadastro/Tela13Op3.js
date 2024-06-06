// criar tela 13 opção 3
class Tela13Op3 extends Phaser.Scene{
    constructor(){
        super({key: 'Tela13Op3'});
    }
    // variáveis
    telaInicial13Op3;
    botaoOp1;
    botaoOp2;
    botaoOp3Clicado;
    botaoSeguir;
    botaoVoltar;
    // carregar imagens
    preload(){
        this.load.image('tela_inicial13_tec', 'assets/cadastro/tela_inicial13_tec.png');
        this.load.image('botao_voltar', 'assets/cadastro/botao_voltar.png');
        this.load.image('botao_seguir', 'assets/cadastro/botao_seguir.png');
        this.load.image('botao_op3_cena13_clicado', 'assets/cadastro/botao_op3_cena13_clicado.png');
        this.load.image('botao_op2_cena13', 'assets/cadastro/botao_op2_cena13.png');
        this.load.image('botao_op1_cena13', 'assets/cadastro/botao_op1_cena13.png');

    }
    // adição de elementos e funcionalidades
    create () {

        somClique(this);

        //adicionar tela
        this.telaInicial13Op3 = this.add.image(400, 300, 'tela_inicial13_tec').setScale(0.57);
        //adicionar botao de voltar
        this.botaoVoltar = this.add.image(108.5, 441, 'botao_voltar').setScale(0.07); // botao voltar
        this.botaoVoltar.setDepth(3); 
        this.botaoVoltar.setInteractive();
        //adicionar botao seguir
        this.botaoSeguir = this.add.image(691, 441, 'botao_seguir').setScale(0.07);
        this.botaoSeguir.setDepth(3); 
        this.botaoSeguir.setInteractive(); 
        //adicionar botao op1
        this.botaoOp1 = this.add.image(400, 270, 'botao_op1_cena13').setScale(0.15); // botao voltar
        this.botaoOp1.setDepth(3); 
        this.botaoOp1.setInteractive();
        //adicionar botao op2
        this.botaoOp2 = this.add.image(400, 315, 'botao_op2_cena13').setScale(0.15); // botao voltar
        this.botaoOp2.setDepth(3); 
        this.botaoOp2.setInteractive();
        //adicionar botao op3 clicado
        this.botaoOp3Clicado = this.add.image(400, 360, 'botao_op3_cena13_clicado').setScale(0.15); // botao voltar
        this.botaoOp3Clicado.setDepth(3); 
        this.botaoOp3Clicado.setInteractive();

        //ações quando clica no botão voltar

        this.botaoVoltar.on('pointerover', () => {
            // Reduzir o tamanho do asset
            this.botaoVoltar.setScale(0.06);
        });
    
        // Configurar evento para quando o mouse não está mais sobre o asset
        this.botaoVoltar.on('pointerout', () => {
            // Restaurar o tamanho original do asset
            this.botaoVoltar.setScale(0.07);
        })

        this.botaoVoltar.on('pointerdown', () => { 
            
            this.scene.start('Tela13');

        });

        //ações quando clica no botão seguir

        this.botaoSeguir.on('pointerover', () => {
            // Reduzir o tamanho do asset
            this.botaoSeguir.setScale(0.06);
        });
    
        // Configurar evento para quando o mouse não está mais sobre o asset
        this.botaoSeguir.on('pointerout', () => {
            // Restaurar o tamanho original do asset
            this.botaoSeguir.setScale(0.07);
        })
       
        
        this.botaoSeguir.on('pointerdown', () => { 
            
            this.scene.start('Tela14');

        });
    }


}
