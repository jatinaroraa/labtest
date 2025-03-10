const tests = [
  {
    name: "Complete Blood Count (CBC)",
  },
  {
    name: "Prothrombin Time (PT)",
  },
  {
    name: "Activated Partial Thromboplastin Time (APTT)",
  },
  {
    name: "D-Dimer Test",
  },
  {
    name: "Erythrocyte Sedimentation Rate (ESR)",
  },
  {
    name: "Hemoglobin Test",
  },
];

export const HematologyTests = [
  { name: "Complete Blood Count (CBC)" },
  { name: "Peripheral Blood Smear (PBS)" },
  { name: "Reticulocyte Count" },
  { name: "Erythrocyte Sedimentation Rate (ESR)" },
  { name: "Prothrombin Time (PT)" },
  { name: "Activated Partial Thromboplastin Time (aPTT)" },
  { name: "D-Dimer Test" },
  { name: "Thrombin Time (TT)" },
  { name: "Total Iron-Binding Capacity (TIBC)" },
  { name: "Hemoglobin Electrophoresis" },
  { name: "Direct Antiglobulin Test (DAT) (Coombs Test)" },
  { name: "Flow Cytometry" },
  { name: "Hemoglobin level" },
  { name: "Folate Level" },
  { name: "Platelet Count" },
  { name: "Leukocyte Alkaline Phosphatase (LAP) Score" },
  { name: "G6PD (Glucose-6-Phosphate Dehydrogenase)" },
  { name: "Antiphospholipid Antibody Testing" },
  { name: "Bleeding Time Test" },
  { name: "Platelet Aggregation Studies" },
  { name: "Myeloperoxidase (MPO) Test" },
  { name: "CD4/CD8 Count" },
  { name: "Beta-2 Microglobulin Test" },
];

export const BiochemistryTests = [
  { name: "Blood Glucose Test" },
  { name: "Liver Function Tests (LFTs)" },
  { name: "Kidney Function Tests" },
  { name: "Lipid Profile" },
  { name: "Electrolyte Panel" },
  { name: "Thyroid Function Tests" },
  { name: "C-Reactive Protein (CRP)" },
  { name: "Bilirubin Test" },
  { name: "Amylase Test" },
  { name: "Lipase Test" },
  { name: "Protein Electrophoresis" },
  { name: "Hemoglobin A1c" },
  { name: "Vitamin and Mineral Tests" },
  { name: "Coagulation Studies (PT/INR, APTT)" },
  { name: "Creatine Kinase (CK) Test" },
  { name: "Urine Tests" },
  { name: "Iron Studies (Ferritin, Serum Iron, TIBC)" },
  { name: "Uric Acid Test" },
  { name: "Celiac Disease Panel" },
  { name: "B-type Natriuretic Peptide (BNP)" },
  { name: "Prostate-Specific Antigen (PSA) Test" },
];
export const SerologyTest = [
  { name: "HIV (Human Immunodeficiency Virus)" },
  { name: "Hepatitis B Surface Antigen (HBsAg)" },
  { name: "Hepatitis C Antibody (Anti-HCV)" },
  { name: "Hepatitis A (Anti-HAV IgM and IgG)" },
  { name: "Herpes Simplex Virus (HSV) Antibodies" },
  { name: "Rubella (German Measles) Antibodies" },
  { name: "Varicella (Chickenpox) Antibodies" },
  { name: "Cytomegalovirus (CMV) Antibody" },
  { name: "Antinuclear Antibody (ANA) Test" },
  { name: "Rheumatoid Factor (RF)" },
  { name: "Anti-CCP (Cyclic Citrullinated Peptides)" },
  { name: "Toxoplasmosis IgG/IgM" },
  { name: "Malaria Antibody/Antigen" },
  { name: "Aspergillus Antibody" },
  { name: "COVID-19 Antibody Test" },
];
export const allTestList = [
  ...HematologyTests,
  ...BiochemistryTests,
  ...SerologyTest,
];
