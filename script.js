const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas atitudes você considera mais importante para melhorar a saúde pública?",
        alternativas: [
            {
                texto: "Fortalecer o atendimento nos hospitais e postos de saúde, garantindo acesso rápido e de qualidade para toda a população.",
                afirmacao: "Você é uma pessoa cuidadora e solidária, que acredita que a saúde deve estar disponível para todos, principalmente para quem mais precisa."
            },
            {
                texto:  "Investir na prevenção e na educação em saúde, incentivando vacinação, alimentação saudável, higiene e hábitos de vida mais saudáveis.",
                afirmacao: "Você é uma pessoa preventiva e consciente, que acredita que evitar doenças e promover qualidade de vida é tão importante quanto tratar problemas de saúde."
            }    
           
        ]
    },
    {
       
            enunciado: "Como você acha que a sociedade pode contribuir para fortalecer a saúde pública?",
            alternativas: [
                {
                    texto: "Participando de campanhas e ações comunitárias de saúde.",
                    afirmacao: "Você é uma pessoa participativa e comunitária, que gosta de colaborar e acredita que a união pode transformar a realidade."
                },
                {
                    texto:  "Adotando atitudes responsáveis no dia a dia, como manter a higiene, respeitar orientações de saúde e cuidar do ambiente.",
                    afirmacao: "Você é uma pessoa responsável e cuidadosa, que entende que a saúde pública também depende das escolhas e atitudes de cada indivíduo."
                }    
               
            ]
        },
        {
            enunciado: "Qual atitude você considera mais importante para uma população mais saudável?",

            alternativas: [
                {
                    texto: "Incentivar hábitos de vida saudáveis, como alimentação equilibrada e prática de atividades físicas.",
                    afirmacao: "Você é uma pessoa disciplinada e motivadora, que acredita que pequenas mudanças de hábitos podem gerar grandes benefícios."
                },
                {
                    texto:    "Ampliar o acesso à informação sobre saúde, ensinando a população a identificar riscos e cuidar melhor de si.",
               
                    afirmacao: "Você é uma pessoa informada e responsável, que acredita que conhecimento é uma ferramenta importante para melhorar a saúde de todos."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();