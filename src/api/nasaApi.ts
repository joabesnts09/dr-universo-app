// import axios from 'axios'
// import { format } from 'date-fns'

// export const getNasaEvents = async (month: Date) => {
//   const startDate = format(month, 'yyyy-MM-01');
//   const endDate = format(month, 'yyyy-MM-dd');

//   try {
//     const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`);
//     const events = response.data.map((event: any) => ({
//       title: event.title,
//       description: event.explanation,
//       date: event.date,
//       tips: 'Dicas sobre como observar o evento',
//     }));
//     return events;
//   } catch (error) {
//     console.error('Erro ao buscar eventos da NASA:', error);
//     return [];
//   }
// };

export async function fetchAstronomyEvents(month: Date) {
  return [
    {
      title: 'Chuva de Meteoros Quadrântidas',
      date: '2024-01-03',
      description: 'Chuva de meteoros visível durante a noite.',
      tips: 'Melhor observar após a meia-noite para melhores resultados.',
      image: 'https://api.nasa.gov/images/meteor-shower.jpg', // Imagem do evento
    },
    {
      title: 'Eclipse Solar Total',
      date: '2024-01-15',
      description: 'Eclipse solar visível em partes da América do Norte.',
      tips: 'Use óculos de proteção para observação segura.',
      image: 'https://api.nasa.gov/images/solar-eclipse.jpg', // Imagem do evento
    },
    {
      title: 'Conjunção Planetária Júpiter-Saturno',
      date: '2024-01-20',
      description: 'Conjunção dos planetas Júpiter e Saturno visível a olho nu.',
      tips: 'Use telescópio para melhor observação.',
      image: 'https://api.nasa.gov/images/planetary-conjunction.jpg', // Imagem do evento
    },
    {
      title: 'Chuva de Meteoros Liridas',
      date: '2024-04-22',
      description: 'Chuva de meteoros Liridas visível em todo o hemisfério norte.',
      tips: 'Melhor observar na madrugada para melhores resultados.',
      image: 'https://api.nasa.gov/images/lirid-meteor-shower.jpg', // Imagem do evento
    },
    {
      title: 'Superlua de Maio',
      date: '2024-05-06',
      description: 'Superlua de maio, a maior e mais brilhante do ano.',
      tips: 'Melhor observar em áreas com pouca poluição luminosa.',
      image: 'https://api.nasa.gov/images/supermoon-may.jpg', // Imagem do evento
    },
    {
      title: 'Chuva de Meteoros Perseidas',
      date: '2024-08-12',
      description: 'Chuva de meteoros Perseidas, uma das mais visíveis do ano.',
      tips: 'Melhor observar na madrugada em locais escuros.',
      image: 'https://api.nasa.gov/images/perseids-meteor-shower.jpg', // Imagem do evento
    },
  ];
}

