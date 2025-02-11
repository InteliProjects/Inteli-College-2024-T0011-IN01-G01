// criar cena 18
class Tela18 extends Phaser.Scene{
    constructor(){
        super({key: 'Tela18'});
    }
    // variáveis
    telaInicial18;
    botaoSim;
    botaoVoltar;
    botaoFechar;
    // carregar imagens
    preload(){
        this.load.image('tela_inicial18', 'assets/cadastro/tela_inicial18.png');
        this.load.image('botao_voltar', 'assets/cadastro/botao_voltar.png');
        this.load.image('botao_sim', 'assets/cadastro/botao_sim.png');       
    
    }
    // adição de elementos e funcionalidades
    create () {

        somClique(this);

        //adicionar tela
        this.telaInicial18 = this.add.image(400, 300, 'tela_inicial18').setScale(0.57);
        //adicionar botao de voltar
        this.botaoVoltar = this.add.image(108.5, 441, 'botao_voltar').setScale(0.07); // botao voltar
        this.botaoVoltar.setDepth(3); 
        this.botaoVoltar.setInteractive();

        //adicionar botao sim
        this.botaoSim = this.add.image(400, 420, 'botao_sim').setScale(0.06); // botao vermelho
        this.botaoSim.setDepth(3);
        this.botaoSim.setInteractive();
   
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
            
            this.scene.start('Tela17');

        });

        //ações quando clica no botão sim

        this.botaoSim.on('pointerover', () => {
            // Reduzir o tamanho do asset
            this.botaoSim.setScale(0.05);
        });
    
        // Configurar evento para quando o mouse não está mais sobre o asset
        this.botaoSim.on('pointerout', () => {
            // Restaurar o tamanho original do asset
            this.botaoSim.setScale(0.06);
        })            

        this.botaoSim.on('pointerdown', () => { 
            this.scene.start('Tela19quiz1');
        });
        

    } 

}