import supabase from "./supabase";
export async function getScores() {
  const { data, error } = await supabase.from("ScoresPG").select("*");
  if (error) {
    console.log(error);
    throw new Error("Data could not be fetched");
  }
  return data;
}
