import { achievements } from '../data/achievements';
import Footer from '../components/Footer';

export default function Achievements() {
    return (
        <div className="achievements-page" style={{ paddingTop: '160px' }}>
            <div className="container">
                <div style={{ marginBottom: '80px' }}>
                    <div className="mono-label">[ ACCESS_HISTORY_RECORD ]</div>
                    <h1 style={{ fontSize: '72px', margin: '16px 0', fontWeight: 200 }}>MILESTONES_</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '32px' }}>
                    {achievements.map((achievement) => (
                        <div key={achievement.id} className="card-tactical" style={{ borderLeft: achievement.highlight ? '4px solid var(--color-neon-red)' : '1px solid rgba(255, 59, 59, 0.15)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <div className="mono-label" style={{ color: achievement.highlight ? 'var(--color-neon-red)' : 'var(--color-slate-gray)' }}>{achievement.category}</div>
                                <div className="mono-label" style={{ fontSize: '10px' }}>{achievement.date}</div>
                            </div>
                            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'white' }}>{achievement.title}</h3>
                            <p style={{ color: 'var(--color-ash)', opacity: 0.6, fontSize: '14px', lineHeight: '1.6' }}>{achievement.description}</p>
                            <div style={{ marginTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#444' }}>
                                SRC // {achievement.organization || 'INTERNAL'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
