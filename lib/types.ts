export interface BaseResource {
  id: string;
  title: string;
  subjectCode: string;
  subjectName: string;
  department: string;
  semester: number;
  fileType: string;
  pdfUrl?: string;
  videoUrl?: string;
  isExclusive?: boolean;
}

export interface Note extends BaseResource {
  contributor: string;
}

export interface YearWisePYQ extends BaseResource {
  year: string; // e.g., "Nov 23"
}

export interface UnitWisePYQ extends BaseResource {
  unit: number;
}

export interface ContentResource extends BaseResource {
  type: string;
  uploadedBy: string;
  uploadedOn: string;
}

export interface SyllabusUnit {
  unit: number;
  title: string;
  topics: string[];
}

export interface ImportantUnit {
  unit: number;
  title: string;
  topics: string[];
  questions: string[];
}

export interface SubjectResources {
  notes: {
    rgpv: Note[];
    college: Note[];
  };
  pyq: {
    yearWise: YearWisePYQ[];
    unitWise: UnitWisePYQ[];
  };
  content: ContentResource[];
  important: ImportantUnit[];
  syllabus: SyllabusUnit[];
}

export type Resource = Note | YearWisePYQ | UnitWisePYQ | ContentResource;