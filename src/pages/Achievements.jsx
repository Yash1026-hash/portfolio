import { achievements } from '../data/achievements';
import Footer from '../components/Footer';

export default function Achievements() {
    return (
        <div className="achievements-page obsidian-void" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div className="page-header" style={{ marginBottom: '80px' }}>
                    <div className="micro-label">Recognition & Awards</div>
                    <h1 className="heading-display" style={{ fontSize: '72px', margin: '16px 0 32px' }}>Milestones.</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="glass-card" style={{ border: achievement.highlight ? '1px solid var(--color-chartreuse-pulse)' : '1px solid var(--color-graphite-600)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <div className="micro-label" style={{ color: achievement.highlight ? 'var(--color-chartreuse-pulse)' : 'var(--color-slate-300)' }}>{achievement.category}</div>
                                <div className="micro-label">{achievement.date}</div>
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'white' }}>{achievement.title}</h3>
                            <p style={{ color: 'var(--color-slate-200)', fontSize: '14px', lineHeight: '1.6' }}>{achievement.description}</p>
                            {achievement.organization && (
                                <div style={{ marginTop: '24px', color: 'var(--color-slate-300)', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                                    // {achievement.organization}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
