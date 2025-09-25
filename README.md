# BRASPEX - Site React TypeScript

Este projeto foi migrado de HTML estático para React TypeScript, mantendo toda a funcionalidade e design originais.

## 🚀 Migração Realizada

### Arquivos Convertidos
- **HTML → React Components**: Todos os componentes HTML foram convertidos para React TypeScript
- **JavaScript Vanilla → React Hooks**: Toda funcionalidade JavaScript foi migrada para hooks do React
- **CSS**: Mantido o CSS original com adaptações para React
- **Imagens**: Movidas para a pasta `public/imagens`

### Componentes Criados
- `Header.tsx` - Navegação principal com menu responsivo
- `Hero.tsx` - Banner principal com slider de imagens
- `Vantagens.tsx` - Grid de vantagens dos kits
- `Parceiros.tsx` - Carrossel de parceiros animado
- `Comparacao.tsx` - Gráfico de comparação interativo
- `Kits.tsx` - Showcase dos kits com modal de imagens
- `Fluxo.tsx` - Fluxo de trabalho interativo
- `QRCode.tsx` - Gerador de QR Code com biblioteca
- `Contato.tsx` - Informações de contato
- `Footer.tsx` - Rodapé com links de navegação

## 📦 Tecnologias Utilizadas
- React 18.2.0
- TypeScript 4.7.4
- QRCode library para geração de códigos QR
- CSS original mantido

## 🛠️ Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm

### Instalação
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
```

O site estará disponível em `http://localhost:3000`

### Build para Produção
```bash
npm run build
```

## 🔄 Funcionalidades Implementadas

### ✅ Funcionalidades Migradas
- [x] Menu de navegação responsivo com dropdown
- [x] Slider automático no hero banner
- [x] Navegação suave entre seções
- [x] Carrossel animado de parceiros
- [x] Gráfico de comparação com animação
- [x] Modal de imagens nos kits
- [x] Fluxo de trabalho interativo
- [x] Geração de QR Code
- [x] Design responsivo
- [x] Todas as animações e transições

### 🎯 Melhorias Implementadas
- **TypeScript**: Tipagem estática para melhor manutenibilidade
- **Componentes Reutilizáveis**: Estrutura modular
- **Estado Gerenciado**: Usando React hooks
- **Performance**: Otimizações do React
- **Manutenibilidade**: Código mais organizado

## 📁 Estrutura do Projeto
```
src/
├── components/           # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Vantagens.tsx
│   ├── Parceiros.tsx
│   ├── Comparacao.tsx
│   ├── Kits.tsx
│   ├── Fluxo.tsx
│   ├── QRCode.tsx
│   ├── Contato.tsx
│   └── Footer.tsx
├── styles/
│   └── styles.css        # CSS original adaptado
├── App.tsx               # Componente principal
└── index.tsx             # Ponto de entrada

public/
├── imagens/              # Todas as imagens do site
├── index.html            # Template HTML
└── manifest.json         # Manifest da aplicação
```

## 🎨 Design e Responsividade
O design original foi mantido integralmente, incluindo:
- Paleta de cores corporativa
- Tipografia (Inter font)
- Layout responsivo
- Animações e transições
- Componentes interativos

## 📱 Compatibilidade
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile
- ✅ Todos os navegadores modernos

## 🔧 Scripts Disponíveis
- `npm start` - Inicia o servidor de desenvolvimento
- `npm build` - Cria build de produção
- `npm test` - Executa testes
- `npm eject` - Ejeta configurações (não recomendado)

## 📋 Próximos Passos
- [ ] Implementar testes unitários
- [ ] Adicionar PWA features
- [ ] Implementar lazy loading para imagens
- [ ] Adicionar analytics
- [ ] SEO otimizations

---
**Desenvolvimento**: Migração completa de HTML para React TypeScript mantendo toda a funcionalidade original.