# Previsão de Custos de Seguro

Este é um projeto para prever os custos de seguro usando um modelo de aprendizado de máquina treinado. O modelo leva em consideração variáveis como idade, sexo, IMC (Índice de Massa Corporal), número de filhos, status de fumante e região para prever o custo do seguro.

## Tecnologias Utilizadas

- **Flask**: Framework web para construir a API.
- **Joblib**: Usado para carregar o modelo treinado e o escalador.
- **Scikit-learn**: Utilizado para o treinamento do modelo.
- **NumPy**: Biblioteca para manipulação de arrays.
- **HTML/CSS/JS**: Usado para a construção da interface web do usuário.

## Dataset Utilizado

Link para o dataset <br>
https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/insurance.csv <br>
ou para melhor visualizção <br>
https://github.com/stedy/Machine-Learning-with-R-datasets/blob/master/insurance.csv

## Modelos
Projeto completo com todos os codigos para identificar qual é o melhor modelo para se utilizar. <br>
[Modelo Completo em py](Modelo_Completo/Projeto_Final.ipynb) <br>
ou <br>
[Modelo Completo em ipynb](Modelo_Completo/Projeto_Final.ipynb)

Para a parte de interface-web do usuario, foi refeito o codigo em py utilizando o melhor modelo identificado no [Modelo Completo](Modelo_Completo/Projeto_Final.ipynb). <br>
Porem antes de ser rodado o codigo é necessario instalar as seguintes extensões e bibliotecas:
- **Python**: Extensão do pyhton dentro do VSCODE e o python na propria maquina
- **Bibliotecas**: Serão necessarias algumas bibliotecas para o projeto rodar, para facilitar isso foi deixado um arquivo chamando requirements.txt, que executando o comando "pip install -r requirements.txt" todas serão instaladas automaticamente.

[Modelo com interface WEB](app.py)
