const translations = {
  pt: {
    nav: {
      services: 'Maturidade',
      checklist: 'Impacto',
      work: 'Modelo',
      contact: 'Contato',
      book: 'Agendar diagnóstico'
    },
    hero: {
      badge: 'Quality Engineering para times que já entregam em produção',
      headline: 'Menos risco em produção. Mais previsibilidade em cada release.',
      sub: 'A Raven Tech estrutura qualidade como um sistema contínuo, do planejamento ao deploy.',
      primaryCta: 'Agendar diagnóstico',
      highlights: ['Web', 'Mobile', 'API']
    },
    problems: {
      title: 'Qualidade não é fase. É sistema de decisão.',
      subtitle: 'Quando a maturidade sobe, o time previne incidentes antes de eles acontecerem.',
      cta: 'Ver onde geramos impacto',
      items: [
        {
          title: 'Risco antes de cobertura',
          desc: 'Priorizamos o que pode afetar o negócio, não o que é apenas simples de testar.'
        },
        {
          title: 'Confiabilidade antes de volume',
          desc: 'Menos testes frágeis e mais sinais sólidos para aprovar releases com segurança.'
        },
        {
          title: 'Qualidade como responsabilidade do time',
          desc: 'Qualidade deixa de ser um gargalo isolado e vira uma prática consistente de engenharia.'
        }
      ]
    },
    services: {
      title: 'Contextos em que normalmente entramos',
      subtitle: 'Não operamos como um catálogo de QA. Entramos quando a qualidade vira limite para escalar.',
      cta: 'Quero avaliar meu cenário',
      cards: [
        {
          title: 'Produto em escala com regressão crescente',
          desc: 'Reduzimos retrabalho e estabilizamos o ciclo de release com critérios mais claros.'
        },
        {
          title: 'Releases frequentes com rollback recorrente',
          desc: 'Criamos gates de confiança para publicar com menos surpresas em produção.'
        },
        {
          title: 'Times distribuídos sem padrão comum',
          desc: 'Alinhamos critérios técnicos e o fluxo de validação entre squads.'
        }
      ]
    },
    work: {
      title: 'Modelo de atuação da Raven Tech',
      subtitle: 'Direto, sênior e orientado a resultado mensurável.',
      cta: 'Falar com especialista',
      points: [
        {
          title: 'Diagnóstico objetivo de riscos e gargalos',
          desc: 'Mapeamos os principais riscos técnicos e de processo que impactam a produção, priorizando o que realmente afeta o negócio e a entrega.'
        },
        {
          title: 'Plano de 90 dias com prioridades claras',
          desc: 'Definimos um roadmap enxuto com ações de curto prazo que geram impacto mensurável sem travar o fluxo do time.'
        },
        {
          title: 'Execução junto ao time, sem dependência artificial',
          desc: 'Atuamos lado a lado com o time, estruturando qualidade de forma sustentável e transferindo conhecimento desde o início.'
        },
        {
          title: 'Métricas de confiança para acompanhar a evolução',
          desc: 'Acompanhamos a evolução da qualidade com indicadores claros que suportam decisões de release e melhoria contínua.'
        }
      ]
    },
    clients: {
      title: 'Empresas que já confiaram na Raven Tech',
      subtitle: 'Alguns perfis de clientes que atendemos em iniciativas de qualidade e confiabilidade.',
      items: [
        { name: 'Starbucks', segment: 'Food & Beverage', logo: '/clients/starbucks.png' },
        { name: 'Telus Digital', segment: 'Digital Services', logo: '/clients/logo-telus.svg' },
        { name: 'Solaire Casino & Resort', segment: 'Hospitality & Gaming', logo: '/clients/solaire-logo.png', logoScale: 1.2 },
        { name: 'Ticketmaster', segment: 'Ticketing & Events', logo: '/clients/logo-ticketmaster.svg', logoScale: 0.9 },
        { name: 'ask.com', segment: 'Search & Media', logo: '/clients/logo-ask.png' },
        { name: 'PWC', segment: 'Consulting & Advisory', logo: '/clients/logo-pwc.png' },
        { name: 'Okta', segment: 'Identity & Security', logo: '/clients/logo-okta.png', logoScale: 0.8 }
      ]
    },
    final: {
      headline: 'Vamos tornar sua entrega mais previsível',
      sub: 'Compartilhe seu contexto e retornamos com um plano inicial de evolução de qualidade.',
      cta: 'Solicitar diagnóstico',
      calendlyPlaceholder: 'Resposta inicial em até 1 dia útil.',
      calendly: {
        button: 'Agendar conversa (30 min)',
        secondary: 'Prefere não agendar uma call agora? Envie seu contexto por escrito.',
        modalTitle: 'Diagnóstico Raven Tech (30 min)',
        url: 'https://calendly.com/hello-ravenqe-29yu/30min'
      },
      backToTop: 'Voltar ao topo',
      form: {
        name: 'Nome',
        email: 'E-mail',
        company: 'Empresa',
        message: 'Contexto atual e principal risco de qualidade'
      },
      labels: {
        email: 'E-mail',
        phone: 'Telefone',
        coverage: 'Cobertura'
      },
      details: {
        email: 'hello@ravenqe.io',
        phone: '(11) 98803-4411',
        location: 'Atendimento remoto para times distribuídos'
      }
    }
  },
  en: {
    nav: {
      services: 'Maturity',
      checklist: 'Impact',
      work: 'Operating Model',
      contact: 'Contact',
      book: 'Book an assessment'
    },
    hero: {
      badge: 'Quality Engineering for teams already shipping to production',
      headline: 'Lower production risk. Predictable releases.',
      sub: 'Raven Tech builds quality as an operating system across your delivery flow.',
      primaryCta: 'Book an assessment',
      highlights: ['Web', 'Mobile', 'API']
    },
    problems: {
      title: 'Quality is not a phase. It is a decision system.',
      subtitle: 'Stronger engineering decisions earlier mean fewer incidents later.',
      cta: 'See where we drive impact',
      items: [
        {
          title: 'Risk over raw coverage',
          desc: 'We focus on what can hurt the business, not what is easiest to automate.'
        },
        {
          title: 'Signal quality over test count',
          desc: 'Fewer brittle checks, stronger confidence at release time.'
        },
        {
          title: 'Shared engineering ownership',
          desc: 'Quality becomes a team habit, not a late-stage handoff.'
        }
      ]
    },
    services: {
      title: 'Where we usually step in',
      subtitle: 'This is not a QA menu. We engage when quality becomes a growth constraint.',
      cta: 'Evaluate my scenario',
      cards: [
        {
          title: 'Scaling product with rising regression',
          desc: 'We reduce rework and restore release stability.'
        },
        {
          title: 'Fast release cadence with frequent rollbacks',
          desc: 'We establish confidence gates so shipping stops feeling risky.'
        },
        {
          title: 'Distributed teams with inconsistent quality bar',
          desc: 'We align technical criteria and validation flow across squads.'
        }
      ]
    },
    work: {
      title: 'How Raven Tech operates',
      subtitle: 'Senior-led, direct, and focused on measurable outcomes.',
      cta: 'Talk to a specialist',
      points: [
        {
          title: 'Objective risk & bottleneck assessment',
          desc: 'We identify technical, process, and release risks that directly impact production stability and delivery predictability.'
        },
        {
          title: '90-day execution plan with clear priorities',
          desc: 'We define a focused 90-day roadmap with prioritized actions designed to reduce risk and improve delivery confidence without slowing the team.'
        },
        {
          title: 'Embedded execution with no artificial dependency',
          desc: 'We work alongside the team to build sustainable quality practices while transferring ownership and technical context from day one.'
        },
        {
          title: 'Confidence metrics to track maturity',
          desc: 'We establish quality and reliability metrics that support release decisions and continuous improvement over time.'
        }
      ]
    },
    clients: {
      title: 'Teams that have trusted Raven Tech',
      subtitle: 'A few client profiles we support across quality and reliability initiatives.',
      items: [
        { name: 'Starbucks', segment: 'Food & Beverage', logo: '/clients/starbucks.png' },
        { name: 'Telus Digital', segment: 'Digital Services', logo: '/clients/logo-telus.svg' },
        { name: 'Solaire Casino & Resort', segment: 'Hospitality & Gaming', logo: '/clients/solaire-logo.png', logoScale: 1.2 },
        { name: 'Ticketmaster', segment: 'Ticketing & Events', logo: '/clients/logo-ticketmaster.svg', logoScale: 0.9 },
        { name: 'ask.com', segment: 'Search & Media', logo: '/clients/logo-ask.png' },
        { name: 'PWC', segment: 'Consulting & Advisory', logo: '/clients/logo-pwc.png' },
        { name: 'Okta', segment: 'Identity & Security', logo: '/clients/logo-okta.png', logoScale: 0.8 }
      ]
    },
    final: {
      headline: 'Let’s make delivery more predictable',
      sub: 'Share your context and we will send an initial quality improvement plan.',
      cta: 'Request assessment',
      calendlyPlaceholder: 'First response within 1 business day.',
      calendly: {
        button: 'Book a 30-min diagnostic call',
        secondary: 'Prefer not to book a call now? Share your context in writing.',
        modalTitle: 'Raven Tech Diagnostic Call (30 min)',
        url: 'https://calendly.com/hello-ravenqe-29yu/30min'
      },
      backToTop: 'Back to top',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Current context and top quality risk'
      },
      labels: {
        email: 'Email',
        phone: 'Phone',
        coverage: 'Coverage'
      },
      details: {
        email: 'hello@ravenqe.io',
        phone: '+55 11 98803-4411',
        location: 'Remote-first delivery for global teams'
      }
    }
  },
  es: {
    nav: {
      services: 'Madurez',
      checklist: 'Impacto',
      work: 'Modelo',
      contact: 'Contacto',
      book: 'Agendar diagnóstico'
    },
    hero: {
      badge: 'Quality Engineering para equipos que ya entregan en producción',
      headline: 'Menos riesgo en producción. Más previsibilidad en cada release.',
      sub: 'Raven Tech estructura la calidad como un sistema continuo, desde la planificación hasta el deploy.',
      primaryCta: 'Agendar diagnóstico',
      highlights: ['Web', 'Mobile', 'API']
    },
    problems: {
      title: 'La calidad no es una fase. Es un sistema de decisión.',
      subtitle: 'Cuando la madurez sube, el equipo previene incidentes antes de que ocurran.',
      cta: 'Ver dónde generamos impacto',
      items: [
        {
          title: 'Riesgo antes que cobertura',
          desc: 'Priorizamos lo que puede afectar al negocio, no solo lo más fácil de probar.'
        },
        {
          title: 'Confiabilidad antes que volumen',
          desc: 'Menos pruebas frágiles y señales más sólidas para aprobar releases con seguridad.'
        },
        {
          title: 'Calidad como responsabilidad del equipo',
          desc: 'La calidad deja de ser un cuello de botella aislado y se vuelve una práctica de ingeniería consistente.'
        }
      ]
    },
    services: {
      title: 'Contextos en los que normalmente entramos',
      subtitle: 'No operamos como un catálogo de QA. Entramos cuando la calidad se convierte en un límite para escalar.',
      cta: 'Quiero evaluar mi escenario',
      cards: [
        {
          title: 'Producto en escala con regresión creciente',
          desc: 'Reducimos retrabajo y estabilizamos el ciclo de release con criterios más claros.'
        },
        {
          title: 'Releases frecuentes con rollback recurrente',
          desc: 'Creamos gates de confianza para publicar con menos sorpresas en producción.'
        },
        {
          title: 'Equipos distribuidos sin estándar común',
          desc: 'Alineamos criterios técnicos y flujo de validación entre squads.'
        }
      ]
    },
    work: {
      title: 'Modelo de actuación de Raven Tech',
      subtitle: 'Directo, senior y orientado a resultados medibles.',
      cta: 'Hablar con un especialista',
      points: [
        {
          title: 'Diagnóstico objetivo de riesgos y cuellos de botella',
          desc: 'Mapeamos los principales riesgos técnicos y de proceso que impactan producción, priorizando lo que realmente afecta negocio y entrega.'
        },
        {
          title: 'Plan de 90 días con prioridades claras',
          desc: 'Definimos un roadmap compacto con acciones de corto plazo que generan impacto medible sin frenar el ritmo del equipo.'
        },
        {
          title: 'Ejecución junto al equipo, sin dependencia artificial',
          desc: 'Trabajamos lado a lado con el equipo, estructurando calidad de forma sostenible y transfiriendo conocimiento desde el inicio.'
        },
        {
          title: 'Métricas de confianza para acompañar la evolución',
          desc: 'Acompañamos la evolución de la calidad con indicadores claros que soportan decisiones de release y mejora continua.'
        }
      ]
    },
    clients: {
      title: 'Empresas que ya confiaron en Raven Tech',
      subtitle: 'Algunos perfiles de clientes que apoyamos en iniciativas de calidad y confiabilidad.',
      items: [
        { name: 'Starbucks', segment: 'Food & Beverage', logo: '/clients/starbucks.png' },
        { name: 'Telus Digital', segment: 'Digital Services', logo: '/clients/logo-telus.svg' },
        { name: 'Solaire Casino & Resort', segment: 'Hospitality & Gaming', logo: '/clients/solaire-logo.png', logoScale: 1.2 },
        { name: 'Ticketmaster', segment: 'Ticketing & Events', logo: '/clients/logo-ticketmaster.svg', logoScale: 0.9 },
        { name: 'ask.com', segment: 'Search & Media', logo: '/clients/logo-ask.png' },
        { name: 'PWC', segment: 'Consulting & Advisory', logo: '/clients/logo-pwc.png' },
        { name: 'Okta', segment: 'Identity & Security', logo: '/clients/logo-okta.png', logoScale: 0.8 }
      ]
    },
    final: {
      headline: 'Hagamos tu entrega más predecible',
      sub: 'Comparte tu contexto y te devolvemos un plan inicial de evolución de calidad.',
      cta: 'Solicitar diagnóstico',
      calendlyPlaceholder: 'Primera respuesta en hasta 1 día hábil.',
      calendly: {
        button: 'Agendar conversación (30 min)',
        secondary: '¿Prefieres no agendar una llamada ahora? Envíanos tu contexto por escrito.',
        modalTitle: 'Diagnóstico Raven Tech (30 min)',
        url: 'https://calendly.com/hello-ravenqe-29yu/30min'
      },
      backToTop: 'Volver arriba',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa',
        message: 'Contexto actual y principal riesgo de calidad'
      },
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        coverage: 'Cobertura'
      },
      details: {
        email: 'hello@ravenqe.io',
        phone: '+55 11 98803-4411',
        location: 'Atención remota para equipos distribuidos globalmente'
      }
    }
  }
}

export default translations
