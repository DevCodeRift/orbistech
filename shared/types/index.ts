// Alliance related types
export interface Alliance {
  id: number;
  name: string;
  acronym: string;
  score: number;
  color: string;
  dateCreated: string;
  acceptMembers: boolean;
  flagUrl: string;
  forumUrl?: string;
  discordUrl?: string;
  wikiUrl?: string;
  nations: Nation[];
}

// Nation related types
export interface Nation {
  id: number;
  nationName: string;
  leaderName: string;
  continent: string;
  warPolicy: string;
  domesticPolicy: string;
  color: string;
  alliance?: Alliance;
  cities: number;
  score: number;
  population: number;
  flag: string;
  vacation_mode_turns: number;
  beige_turns: number;
  espionage_available: boolean;
  last_active: string;
}

// User related types (Discord + P&W linking)
export interface User {
  id: string; // Discord ID
  discordUsername: string;
  discordDiscriminator: string;
  discordAvatar?: string;
  nationId?: number;
  nation?: Nation;
  apiKey?: string; // Encrypted
  roles: UserRole[];
  createdAt: string;
  updatedAt: string;
}

export interface UserRole {
  id: string;
  userId: string;
  allianceId: number;
  role: AllianceRole;
  permissions: Permission[];
  assignedBy: string;
  assignedAt: string;
}

// Alliance roles and permissions
export enum AllianceRole {
  LEADER = 'LEADER',
  HEIR = 'HEIR',
  OFFICER = 'OFFICER',
  MEMBER = 'MEMBER',
  APPLICANT = 'APPLICANT'
}

export enum Permission {
  // Module access
  ACCESS_RECRUITMENT = 'ACCESS_RECRUITMENT',
  ACCESS_MEMBERSHIP = 'ACCESS_MEMBERSHIP',
  ACCESS_WAR = 'ACCESS_WAR',
  ACCESS_BANKING = 'ACCESS_BANKING',
  ACCESS_TAXES = 'ACCESS_TAXES',
  
  // Specific permissions
  MANAGE_MEMBERS = 'MANAGE_MEMBERS',
  MANAGE_APPLICATIONS = 'MANAGE_APPLICATIONS',
  VIEW_BANK = 'VIEW_BANK',
  MANAGE_BANK = 'MANAGE_BANK',
  DECLARE_WAR = 'DECLARE_WAR',
  MANAGE_WARS = 'MANAGE_WARS',
  
  // Admin permissions
  ADMIN_ALL = 'ADMIN_ALL'
}

// Module types
export enum ModuleType {
  RECRUITMENT = 'RECRUITMENT',
  MEMBERSHIP = 'MEMBERSHIP',
  WAR = 'WAR',
  BANKING = 'BANKING',
  TAXES = 'TAXES'
}

export interface AllianceModule {
  id: string;
  allianceId: number;
  moduleType: ModuleType;
  enabled: boolean;
  configuration: Record<string, any>;
  enabledAt: string;
  enabledBy: string;
}
