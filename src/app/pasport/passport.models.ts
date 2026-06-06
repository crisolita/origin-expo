type ObjectValues<T> = T[keyof T];

export type UuidEntityBasePrimitive = {
  uuid: string;
  createdAt?: string;
  updatedAt?: string;
};

export type IncrementalIdEntityBasePrimitive = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UserPrimitive = UuidEntityBasePrimitive;
export type ProfilePrimitive = UuidEntityBasePrimitive;
export type BrandLocationPrimitive = LocationRecord;
export type BrandActivityLinkPrimitive = IncrementalIdEntityBasePrimitive;
export type BrandApplicationPrimitive = UuidEntityBasePrimitive;
export type brandType = string;
export type brandOperationalStatus = string;
export type brandOperationalCapacity = string;
export type brandProductionFrequency = string;
export type fileAttachmentTag = string;

export const PieceCategory = {
  CLOTHING: 'CLOTHING',
  BAG: 'BAG',
  GARMENT: 'GARMENT',
  ACCESSORY: 'ACCESSORY',
  FOOTWEAR: 'FOOTWEAR',
  JEWELRY: 'JEWELRY',
} as const;
export type PieceCategory = ObjectValues<typeof PieceCategory> | string;

export const Season = {
  AUTUMN: 'AUTUMN',
  SPRING_SUMMER: 'SPRING_SUMMER',
  WINTER: 'WINTER',
  COCKTAIL: 'COCKTAIL',
  CRUISE: 'CRUISE',
} as const;
export type Season = ObjectValues<typeof Season> | string;

export const PassportStatus = {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  INACTIVE: 'INACTIVE',
} as const;
export type PassportStatus = ObjectValues<typeof PassportStatus>;

export type LocationRecord = IncrementalIdEntityBasePrimitive & {
  country: string;
  city: string;
  address?: string;
};

export type FileAttachmentPrimitive<T extends UuidEntityBasePrimitive> =
  IncrementalIdEntityBasePrimitive & {
    parent_uuid: string;
    parent?: T;
    url: string;
    type: string;
    tag: fileAttachmentTag;
  };

export type PiecePrimitive = UuidEntityBasePrimitive & {
  user_uuid: string;
  user?: UserPrimitive;
  user_profile?: ProfilePrimitive;
  makers: string;
  name: string;
  category: Array<PieceCategory>;
  collection_name: string;
  season: Season[];
  description: string;
  media: FileAttachmentPrimitive<PiecePrimitive>[];
  origin: OriginPieceLocationRecord;
  materials: {
    name: string;
    suppliers: MaterialSuppliersLocationRecord[];
  }[];
  quantity_produced: number;
  quantity_note?: string;
  digital_passport?: string;
  passport_status: PassportStatus;
  blockchain: {
    hash?: string;
    blockchain_certificate?: string;
    block?: string;
    block_chain_url?: string;
    block_chain_cert_url?: string;
  };
  metadataUrl?: string;
  registeredAt?: string;
  date_of_creation: string;
};

export type OriginPieceLocationRecord = LocationRecord & {
  piece_uuid: string;
  piece?: PiecePrimitive;
};

export type MaterialSuppliersLocationRecord = Omit<OriginPieceLocationRecord, 'city'> & {
  provider?: string;
  city?: string;
};

export type BrandPrimitive = UuidEntityBasePrimitive & {
  user_uuid: string;
  user?: UserPrimitive;
  name: string;
  designer_name?: string;
  type?: brandType;
  start_year?: number;
  operational_status?: brandOperationalStatus;
  operational_capacity?: brandOperationalCapacity;
  categories: string[];
  production_frequency?: brandProductionFrequency;
  locations: BrandLocationPrimitive[];
  activity_links?: BrandActivityLinkPrimitive[];
  attachments?: FileAttachmentPrimitive<BrandPrimitive>[];
  application?: BrandApplicationPrimitive;
};

export type PassportMockRecord = {
  uuid: string;
  brand: BrandPrimitive;
  piece: PiecePrimitive;
};

export type PassportViewItem = {
  label: string;
  value: string;
};

export type PassportFieldView = PassportViewItem & {
  tags?: string[];
};
