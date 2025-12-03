import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-zinc-700 bg-zinc-900" />
            <span className="text-lg font-semibold tracking-tight">
              LifeReverse
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Design your remaining time
          </span>
        </header>

        {/* Hero */}
        <section className="mt-16 grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              人生を「逆算」して設計する ToDo アプリ
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                目標から逆算して、<br />
                今日やるべきことだけに集中する。
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                人生のゴールから逆算して、年・月・週・日々のタスクを設計。
                <br className="hidden md:block" />
                LifeReverse は、あなたの限られた時間を「本当にやりたいこと」だけで満たすための
                ミニマルなタスクマネージャーです。
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="h-11 rounded-full bg-white px-6 text-sm font-medium tracking-wide text-black hover:bg-zinc-200">
                目標を設定してスタート
              </Button>
              <span className="text-xs text-zinc-500">
                まずは「人生のゴール」を1つ決めるところから始めましょう。
              </span>
            </div>
          </div>

          {/* Countdown-like visual */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>人生の残り時間（ダミー）</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FOCUS MODE
              </span>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              {[
                { label: "年", value: "42" },
                { label: "月", value: "07" },
                { label: "日", value: "12" },
                { label: "時間", value: "18" },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black px-3 py-3"
                >
                  <div className="font-mono text-2xl tabular-nums md:text-3xl">
                    {unit.value}
                  </div>
                  <div className="text-[10px] tracking-[0.18em] text-zinc-500">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>今日フォーカスするタスク</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  SAMPLE
                </span>
              </div>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>・10年後の「ありたい姿」を書き出す</span>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                    25 min
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>・今月やるべき3つのアクションを決める</span>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400">
                    15 min
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-zinc-500">
              ※ 上記の残り時間・タスクはすべてダミーです。
              <br />
              実際のアプリでは、生年月日や目標から自動的に「逆算された時間」と「今日やること」を表示します。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
