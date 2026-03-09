import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScoutingReport from "@/components/ScoutingReport";
import reports from "@/lib/scoutingData";

type Props = { params: Promise<{ player: string }> };

export async function generateStaticParams() {
  return Object.keys(reports).map((player) => ({ player }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { player } = await params;
  const report = reports[player];
  if (!report) return { title: "Report Not Found" };
  return { title: `${report.name} Scouting Report | Spencer Wilt` };
}

export default async function ReportPage({ params }: Props) {
  const { player } = await params;
  const report = reports[player];
  if (!report) notFound();
  return <ScoutingReport {...report} />;
}
