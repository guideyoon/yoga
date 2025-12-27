import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '요가 소개 | 요가 스튜디오',
  description: '요가 스튜디오의 방향성과 수업 철학을 소개합니다.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {/* 요가에 대한 소개 */}
          <section className="space-y-6">
            <h1 className="text-4xl font-light text-text-dark">요가란 무엇인가요</h1>
            <div className="space-y-4 text-text leading-relaxed text-lg">
              <p>
                요가는 단순한 운동이 아닙니다. 몸과 마음, 그리고 호흡을 하나로 연결하는 수련입니다.
                우리 스튜디오에서는 요가를 통해 일상의 긴장을 풀고, 자신을 돌보는 시간을 만들어갑니다.
              </p>
              <p>
                복잡한 자세나 어려운 동작보다는, 자연스러운 호흡과 움직임에 집중합니다.
                초보자도 부담 없이 시작할 수 있도록, 각자의 속도에 맞춰 천천히 진행합니다.
              </p>
            </div>
          </section>

          {/* 호흡과 움직임의 중요성 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-light text-text-dark">호흡과 움직임</h2>
            <div className="space-y-4 text-text leading-relaxed text-lg">
              <p>
                모든 요가 수업의 중심에는 호흡이 있습니다. 깊고 자연스러운 호흡은 몸의 긴장을 풀고,
                마음을 차분하게 만듭니다. 호흡에 집중할 때, 우리는 지금 이 순간에 머물 수 있습니다.
              </p>
              <p>
                움직임은 호흡을 따라갑니다. 강제로 자세를 만드는 것이 아니라,
                호흡의 흐름에 맞춰 몸이 자연스럽게 움직이도록 이끕니다.
                이렇게 하면 몸이 부드럽게 열리고, 유연성과 힘이 함께 길러집니다.
              </p>
            </div>
          </section>

          {/* 초보자 안내 */}
          <section className="space-y-6 bg-background-light p-8 rounded-sm">
            <h2 className="text-3xl font-light text-text-dark">처음 시작하시나요?</h2>
            <div className="space-y-4 text-text leading-relaxed text-lg">
              <p>
                걱정하지 마세요. 우리 스튜디오의 모든 수업은 초보자도 함께할 수 있도록 구성되어 있습니다.
              </p>
              <ul className="list-none space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>기초 요가 클래스에서 기본 자세와 호흡법을 배웁니다</span>
                </li>
                <li className="flex items-start">
                  <span className="text-natural mr-3">•</span>
                  <span>강사가 각자의 수준에 맞춰 자세를 조정해드립니다</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>무리하지 않고, 자신의 몸에 귀 기울이며 수련합니다</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span>편안한 복장으로 오시면 됩니다. 요가 매트는 제공됩니다</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 스튜디오 철학 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-light text-text-dark">우리의 방향</h2>
            <div className="space-y-4 text-text leading-relaxed text-lg">
              <p>
                우리는 요가를 통해 몸과 마음이 함께 쉬는 공간을 만들고자 합니다.
                경쟁이나 비교가 아닌, 자신을 돌보고 이해하는 시간을 제공합니다.
              </p>
              <p>
                전문적인 용어나 복잡한 설명보다는, 누구나 이해할 수 있는 언어로 안내합니다.
                함께 호흡하며, 함께 성장하는 공간이 되도록 노력합니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

