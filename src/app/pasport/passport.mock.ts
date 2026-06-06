import { PassportMockRecord, PassportStatus, PieceCategory, Season } from './passport.models';

export const PASSPORT_MOCKS: PassportMockRecord[] = [
  {
    uuid: 'robin-morales-fall-25-look-23',
    brand: {
      uuid: 'brand-robin-morales',
      user_uuid: 'user-robin-morales',
      name: 'ROBIN MORALES ATELIER',
      designer_name: 'Robin Morales',
      categories: ['Ropa'],
      locations: [{ id: 1, country: 'Venezuela', city: 'Caracas' }],
    },
    piece: {
      date_of_creation: '2025-08-01 16:00:08.201000',
      makers: 'ROBIN MORALES ATELIER',
      blockchain: {
        block: '454654654654321',
        hash: '25-FW-34',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-robin-morales-look-23',
      user_uuid: 'user-robin-morales',
      name: 'LOOK 23',
      category: [PieceCategory.CLOTHING, 'Gala'],
      collection_name: 'FALL 25',
      season: [Season.AUTUMN],
      description:
        'Vestido de escote recto y tiras spaguetti con corte bajo el pecho, falda asimétrica de doble volante y efecto cola en la parte posterior. Trenzado en la espalda y cremallera oculta en la cintura.',
      media: [],
      origin: {
        id: 1,
        piece_uuid: 'piece-robin-morales-look-23',
        country: 'Venezuela',
        city: 'Caracas',
      },
      materials: [
        {
          name: '8 mts taffeta',
          suppliers: [
            {
              id: 1,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'India',
            },
          ],
        },
        {
          name: '0,5 mts entretela adhesiva',
          suppliers: [
            {
              id: 2,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'Brasil',
            },
          ],
        },
        {
          name: '0,5 mts drill (para corset)',
          suppliers: [
            {
              id: 3,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'EE.UU.',
            },
          ],
        },
        {
          name: '1 cremallera invisible',
          suppliers: [
            {
              id: 4,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: '1 gafete',
          suppliers: [
            {
              id: 5,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: '4 mts crin de 3 cm',
          suppliers: [
            {
              id: 6,
              piece_uuid: 'piece-robin-morales-look-23',
              country: 'Venezuela',
            },
          ],
        },
      ],
      quantity_produced: 1,
      quantity_note:
        'Pieza sample hecha a medida (equivalente a talla 6 US). Este vestido se realiza a demanda.',
      digital_passport: '25-FW-34',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'vanessa-farina-torno-genesis-bag',
    brand: {
      uuid: 'brand-vanessa-farina',
      user_uuid: 'user-vanessa-farina',
      name: 'Taller VF',
      designer_name: 'Vanessa Farina',
      categories: ['Bolso'],
      locations: [{ id: 2, country: 'Venezuela', city: 'Caracas' }],
    },
    piece: {
      date_of_creation: '2024-11-01 16:00:08.201000',
      makers:
        'Taller VF. Artesanos: Marliover Uzcategui, Jose Abello, Alexander Arteaga, Andreina Centeno.',
      blockchain: {
        block: '454654654654321',
        hash: 'TORB13GEN00020116MDM11',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-vanessa-farina-genesis-bag',
      user_uuid: 'user-vanessa-farina',
      name: 'GENESIS BAG',
      category: [PieceCategory.ACCESSORY],
      collection_name: 'TORNO',
      season: [Season.AUTUMN],
      description:
        'Bolso de hombro de formato midi con forma ovalada. Asa al hombro. Cierre mediante imán. La alfarería cobra vida en nuestra colección "TORNO". Inspirada en la magia de las formas moldeadas a mano y los colores de la tierra, esta colección es un homenaje a la artesanía ancestral que despierta la imaginación y el alma. Piezas escultóricas y curvas, se fusionan con piel genuina de cabra y piel genuina de vacuno, permiten apreciar la pureza de la artesanía del oficio de la marroquinería.',
      media: [],
      origin: {
        id: 2,
        piece_uuid: 'piece-vanessa-farina-genesis-bag',
        country: 'Venezuela',
        city: 'Caracas',
      },
      materials: [
        {
          name: 'Piel de cabra',
          suppliers: [
            {
              id: 7,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Piel vacuno',
          suppliers: [
            {
              id: 8,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Driza',
          suppliers: [
            {
              id: 9,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Semicuero sintético',
          suppliers: [
            {
              id: 10,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Contra 600',
          suppliers: [
            {
              id: 11,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Loneta Sky',
          suppliers: [
            {
              id: 12,
              piece_uuid: 'piece-vanessa-farina-genesis-bag',
              country: 'Venezuela',
            },
          ],
        },
      ],
      quantity_produced: 113,
      quantity_note:
        '1er stock: 9 piezas (distribuido en colores varios). Reposición bajo demanda: 104 piezas (distribuido en colores varios).',
      digital_passport: 'TORB13GEN00020116MDM11',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'vistete-de-suenos-100-anos-chevron',
    brand: {
      uuid: 'brand-vistete-de-suenos',
      user_uuid: 'user-vistete-de-suenos',
      name: 'VÍSTETE DE SUEÑOS',
      designer_name: 'Armando Piquer',
      categories: ['Ropa'],
      locations: [{ id: 3, country: 'Venezuela', city: 'Caracas' }],
    },
    piece: {
      date_of_creation: '2023-06-01 16:00:08.201000',
      makers: 'Leibrigui Primo y Verónica Rivas.',
      blockchain: {
        block: '454654654654321',
        hash: 'VDS-AP-CH-COR-TS1',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-vds-100-anos-chevron',
      user_uuid: 'user-vistete-de-suenos',
      name: '100 años de Chevron',
      category: [PieceCategory.CLOTHING],
      collection_name: 'Pieza única',
      season: [Season.AUTUMN, Season.WINTER],
      description:
        'Corset de gala a medida para Elisa Vegas (100 años Chevron). Drapeado a mano con 8,7mts de telas de descarte de Carolina Herrera, Van Ralte y Verónica Rivas sobre corset base de encaje estilo lencero. Diseño de hombros caídos, mangas abullonadas y amplia cola desde el escote trasero.',
      media: [],
      origin: {
        id: 3,
        piece_uuid: 'piece-vds-100-anos-chevron',
        country: 'Venezuela',
        city: 'Caracas',
      },
      materials: [
        {
          name: 'Tafetán de seda (avance de colección Carolina Herrera 2020)',
          suppliers: [
            {
              id: 13,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'EE.UU.',
              city: 'Nueva York',
              provider: 'Carolina Herrera (Sobrantes de producción) ',
            },
          ],
        },
        {
          name: 'Encaje blonda (avance de fábrica Van Ralte)',
          suppliers: [
            {
              id: 14,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'EE.UU.',
            },
          ],
        },
        {
          name: 'Neopreno',
          suppliers: [
            {
              id: 15,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Drill de algodón',
          suppliers: [
            {
              id: 16,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Microfibra',
          suppliers: [
            {
              id: 17,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Varillas metálicas',
          suppliers: [
            {
              id: 18,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Sesgos (avances del Taller Verónica Rivas)',
          suppliers: [
            {
              id: 19,
              piece_uuid: 'piece-vds-100-anos-chevron',
              country: 'Venezuela',
            },
          ],
        },
      ],
      quantity_produced: 1,
      quantity_note: 'Pieza única a medida',
      digital_passport: 'VDS-AP-CH-COR-TS1',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'tarbay-vena-danto-necklace-1',
    brand: {
      uuid: 'brand-tarbay',
      user_uuid: 'user-tarbay',
      name: 'TARBAY',
      designer_name: 'Marta Tarbay y Ana Sofía Tarbay',
      categories: ['Joyas', 'Bolsos'],
      locations: [{ id: 4, country: 'Venezuela', city: 'Isla de Margarita' }],
    },
    piece: {
      date_of_creation: '2025-12-01 09:00:00.000000',
      makers: 'ATELIER TARBAY en la Isla de Margarita',
      blockchain: {
        block: '454654654654321',
        hash: 'VJ2DNT01981H0',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-tarbay-danto-necklace-1',
      user_uuid: 'user-tarbay',
      name: 'Danto Necklace #1',
      category: [PieceCategory.ACCESSORY, 'Joyas'],
      collection_name: 'VENÁ',
      season: [Season.SPRING_SUMMER],
      description:
        'Como una corriente suave que acaricia la orilla, Danto entrelaza la pureza de las perlas, la armonía del jade y el brillo cristalino de la aguamarina. Una pieza que invita a llevar consigo la calma, la luz y la elegancia de los tesoros nacidos del agua.',
      media: [],
      origin: {
        id: 4,
        piece_uuid: 'piece-tarbay-danto-necklace-1',
        country: 'Venezuela',
        city: 'Isla de Margarita',
      },
      materials: [
        {
          name: 'Pearl, Jade, Aquamarine',
          suppliers: [
            {
              id: 20,
              piece_uuid: 'piece-tarbay-danto-necklace-1',
              country: 'Varios',
              provider: 'Gemas del mundo',
            },
          ],
        },
        {
          name: '14K Gold-Filled',
          suppliers: [
            {
              id: 21,
              piece_uuid: 'piece-tarbay-danto-necklace-1',
              country: 'EE.UU.',
            },
          ],
        },
      ],
      quantity_produced: 8,
      quantity_note: 'Producción inicial de 8 piezas y a demanda.',
      digital_passport: 'VJ2DNT01981H0',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'tarbay-vena-gossypium-tote-bag',
    brand: {
      uuid: 'brand-tarbay',
      user_uuid: 'user-tarbay',
      name: 'TARBAY',
      designer_name: 'Marta Tarbay y Ana Sofía Tarbay',
      categories: ['Joyas', 'Bolsos'],
      locations: [{ id: 4, country: 'Venezuela', city: 'Isla de Margarita' }],
    },
    piece: {
      date_of_creation: '2026-01-01 09:00:00.000000',
      makers: 'ATELIER TARBAY en la Isla de Margarita',
      blockchain: {
        block: '454654654654321',
        hash: 'VG1TTE05981MM',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-tarbay-gossypium-tote-bag',
      user_uuid: 'user-tarbay',
      name: 'Gossypium Tote Bag Medium',
      category: [PieceCategory.ACCESSORY, 'Bolso'],
      collection_name: 'VENÁ',
      season: [Season.SPRING_SUMMER],
      description:
        'Tejido a mano en una armonía de colores inspirada por el encuentro del agua, la tierra y la luz, el Gossypium Tote Vená celebra la belleza de los elementos en constante movimiento. Su diseño artesanal captura la fluidez y la energía de la naturaleza, convirtiéndo en un compañero atemporal para cada día.',
      media: [],
      origin: {
        id: 4,
        piece_uuid: 'piece-tarbay-gossypium-tote-bag',
        country: 'Venezuela',
        city: 'Isla de Margarita',
      },
      materials: [
        {
          name: 'Hilos de algodón tintados en colores verdes y azules',
          suppliers: [
            {
              id: 22,
              piece_uuid: 'piece-tarbay-gossypium-tote-bag',
              country: 'Venezuela',
            },
          ],
        },
      ],
      quantity_produced: 8,
      quantity_note: 'Producción inicial de 8 piezas y a demanda.',
      digital_passport: 'VG1TTE05981MM',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'yenny-bastida-buria-jacinta-bustier',
    brand: {
      uuid: 'brand-yenny-bastida',
      user_uuid: 'user-yenny-bastida',
      name: 'YENNY BASTIDA',
      designer_name: 'Yenny Bastida',
      categories: ['Ropa', 'Prêt-à-porter'],
      locations: [{ id: 5, country: 'Venezuela', city: 'Chivacoa, Yaracuy' }],
    },
    piece: {
      date_of_creation: '2025-09-20 09:00:00.000000',
      makers:
        'Edyth (corte), Ana Julia (confección), María Esther (finalización). Nestor y Lily (tejido artesanal).',
      blockchain: {
        block: '454654654654321',
        hash: 'B1182',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-yb-jacinta-bustier',
      user_uuid: 'user-yenny-bastida',
      name: 'Jacinta bustier',
      category: [PieceCategory.CLOTHING, 'Prêt-à-porter'],
      collection_name: 'Buría',
      season: [Season.SPRING_SUMMER],
      description:
        'Top elaborado en raso de algodón, intervenido con fino trabajo de manipulación textil mediante costuras simétricas hechas a mano en el frente. Las mangas abullonadas aportan volumen escultórico, y el cierre metálico posterior completa la pieza con sobriedad técnica.',
      media: [],
      origin: {
        id: 5,
        piece_uuid: 'piece-yb-jacinta-bustier',
        country: 'Venezuela',
        city: 'Chivacoa, Yaracuy',
      },
      materials: [
        {
          name: 'Tela Popelina y Algodon',
          suppliers: [
            {
              id: 23,
              piece_uuid: 'piece-yb-jacinta-bustier',
              country: 'Francia',
              provider: 'Deadstock de LVMH',
            },
            {
              id: 24,
              piece_uuid: 'piece-yb-jacinta-bustier',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Cierres de metal',
          suppliers: [
            {
              id: 25,
              piece_uuid: 'piece-yb-jacinta-bustier',
              country: 'Colombia',
              provider: 'YKK',
            },
          ],
        },
      ],
      quantity_produced: 13,
      quantity_note: '13 unidades. Producción a demanda.',
      digital_passport: 'B1182',
      passport_status: PassportStatus.ACTIVE,
    },
  },
  {
    uuid: 'yenny-bastida-buria-tapiz-skirt',
    brand: {
      uuid: 'brand-yenny-bastida',
      user_uuid: 'user-yenny-bastida',
      name: 'YENNY BASTIDA',
      designer_name: 'Yenny Bastida',
      categories: ['Ropa', 'Prêt-à-porter'],
      locations: [{ id: 5, country: 'Venezuela', city: 'Chivacoa, Yaracuy' }],
    },
    piece: {
      date_of_creation: '2025-09-20 09:00:00.000000',
      makers:
        'Edyth (corte), Ana Julia (confección), María Esther (finalización). Nestor y Lily (tejido artesanal).',
      blockchain: {
        block: '454654654654321',
        hash: 'B1178',
        blockchain_certificate: '54654656546598798',
      },
      uuid: 'piece-yb-tapiz-skirt',
      user_uuid: 'user-yenny-bastida',
      name: 'Tapiz Skirt',
      category: [PieceCategory.CLOTHING, 'Prêt-à-porter'],
      collection_name: 'Buría',
      season: [Season.SPRING_SUMMER],
      description:
        'Falda tejida en telar por artistas con técnica de puntos simétricos en dos colores, sobre una base stretch que aporta estructura y adaptabilidad. El cierre metálico posterior completa la pieza con sobriedad técnica.',
      media: [],
      origin: {
        id: 5,
        piece_uuid: 'piece-yb-tapiz-skirt',
        country: 'Venezuela',
        city: 'Chivacoa, Yaracuy',
      },
      materials: [
        {
          name: 'Tela Popelina y denim stretch',
          suppliers: [
            {
              id: 26,
              piece_uuid: 'piece-yb-tapiz-skirt',
              country: 'Francia',
              provider: 'Deadstock de LVMH',
            },
            {
              id: 27,
              piece_uuid: 'piece-yb-tapiz-skirt',
              country: 'Venezuela',
            },
          ],
        },
        {
          name: 'Cierres de metal',
          suppliers: [
            {
              id: 28,
              piece_uuid: 'piece-yb-tapiz-skirt',
              country: 'Colombia',
              provider: 'YKK',
            },
          ],
        },
      ],
      quantity_produced: 7,
      quantity_note: '7 unidades. Producción a demanda.',
      digital_passport: 'B1178',
      passport_status: PassportStatus.ACTIVE,
    },
  },
];

export function findPassportMock(uuid: string | undefined): PassportMockRecord | undefined {
  return PASSPORT_MOCKS.find((passport) => passport.piece.uuid === uuid);
}
